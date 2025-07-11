import { type ChatPostMessageArguments, WebClient } from "@slack/web-api";

// Internal team Slack (FortyEight AI Team Agency)
const INTERNAL_SLACK_BOT_TOKEN = process.env.INTERNAL_SLACK_BOT_TOKEN;
const INTERNAL_SLACK_CHANNEL_ID = process.env.INTERNAL_SLACK_CHANNEL_ID;

// Client community Slack (FortyEightWeb Community)
const CLIENT_SLACK_BOT_TOKEN = process.env.CLIENT_SLACK_BOT_TOKEN;
const CLIENT_SLACK_CHANNEL_ID = process.env.CLIENT_SLACK_CHANNEL_ID;

if (!INTERNAL_SLACK_BOT_TOKEN || !INTERNAL_SLACK_CHANNEL_ID) {
  console.warn('Internal Slack credentials not found. Internal notifications will be disabled.');
}

if (!CLIENT_SLACK_BOT_TOKEN || !CLIENT_SLACK_CHANNEL_ID) {
  console.warn('Client Slack credentials not found. Client notifications will be disabled.');
}

const internalSlack = INTERNAL_SLACK_BOT_TOKEN ? new WebClient(INTERNAL_SLACK_BOT_TOKEN) : null;
const clientSlack = CLIENT_SLACK_BOT_TOKEN ? new WebClient(CLIENT_SLACK_BOT_TOKEN) : null;

/**
 * Sends a message to internal team Slack (FortyEight AI Team Agency)
 */
async function sendInternalSlackMessage(
  message: ChatPostMessageArguments
): Promise<string | undefined> {
  if (!internalSlack || !INTERNAL_SLACK_CHANNEL_ID) {
    console.log('Internal Slack not configured, skipping message');
    return undefined;
  }

  try {
    const response = await internalSlack.chat.postMessage({
      channel: INTERNAL_SLACK_CHANNEL_ID,
      ...message
    });

    return response.ts;
  } catch (error) {
    console.error('Error sending internal Slack message:', error);
    throw error;
  }
}

/**
 * Sends a message to client community Slack (FortyEightWeb Community)
 */
async function sendClientSlackMessage(
  message: ChatPostMessageArguments
): Promise<string | undefined> {
  if (!clientSlack || !CLIENT_SLACK_CHANNEL_ID) {
    console.log('Client Slack not configured, skipping message');
    return undefined;
  }

  try {
    const response = await clientSlack.chat.postMessage({
      channel: CLIENT_SLACK_CHANNEL_ID,
      ...message
    });

    return response.ts;
  } catch (error) {
    console.error('Error sending client Slack message:', error);
    throw error;
  }
}

/**
 * Send notification for new leads to INTERNAL team
 */
export async function notifyNewLead(leadData: any) {
  if (!internalSlack) return;

  const message = {
    text: `🚀 New Lead Alert!`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*🚀 New Lead Alert!*\n\n*Name:* ${leadData.name}\n*Email:* ${leadData.email}\n*Budget:* ${leadData.budget}\n*Timeline:* ${leadData.timeline}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Project Type:* ${leadData.projectType}\n*Description:* ${leadData.description}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Recommendation:* ${leadData.recommendation}`
        }
      }
    ]
  };

  return sendInternalSlackMessage(message);
}

/**
 * Send notification for new payments to INTERNAL team
 */
export async function notifyNewPayment(paymentData: any) {
  if (!internalSlack) return;

  const message = {
    text: `💰 Payment Received!`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*💰 Payment Received!*\n\n*Amount:* $${paymentData.amount}\n*Customer:* ${paymentData.email}\n*Package:* ${paymentData.projectType}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Stripe ID:* ${paymentData.stripePaymentIntentId}`
        }
      }
    ]
  };

  return sendInternalSlackMessage(message);
}

/**
 * Send daily analytics report to INTERNAL team
 */
export async function sendDailyReport(reportData: any) {
  if (!internalSlack) return;

  const message = {
    text: `📊 Daily Report`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*📊 Daily Report - ${new Date().toLocaleDateString()}*`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*New Leads:* ${reportData.newLeads}\n*Payments:* $${reportData.totalPayments}\n*Website Visitors:* ${reportData.visitors}`
        }
      }
    ]
  };

  return sendInternalSlackMessage(message);
}

/**
 * Welcome new clients to the FortyEightWeb Community
 */
export async function welcomeNewClient(clientData: any) {
  if (!clientSlack) return;

  const message = {
    text: `🎉 Welcome to FortyEightWeb Community!`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*🎉 Welcome to FortyEightWeb Community!*\n\nHey ${clientData.name}! Welcome to our exclusive community of founders and business owners. We're excited to have you here!`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*What you can do here:*\n• Connect with other founders\n• Ask questions and get support\n• Share your wins and challenges\n• Network and find potential collaborators\n• Get help from our "Assist FortyEight" bot`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Your Project:* ${clientData.projectType} package\n*Timeline:* ${clientData.timeline}\n\nFeel free to introduce yourself and let us know what you're building!`
        }
      }
    ]
  };

  return sendClientSlackMessage(message);
}

/**
 * Send project milestone updates to client community
 */
export async function notifyProjectMilestone(milestoneData: any) {
  if (!clientSlack) return;

  const message = {
    text: `🚀 Project Update!`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*🚀 Project Update for ${milestoneData.clientName}*\n\n*Milestone:* ${milestoneData.milestone}\n*Status:* ${milestoneData.status}\n*Next Steps:* ${milestoneData.nextSteps}`
        }
      }
    ]
  };

  return sendClientSlackMessage(message);
}

export { sendInternalSlackMessage, sendClientSlackMessage };