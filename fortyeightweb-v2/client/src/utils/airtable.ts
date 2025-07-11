const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || "your_base_id";
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY || "your_api_key";

export interface AirtableRecord {
  [key: string]: any;
}

export async function submitToAirtable(data: AirtableRecord, tableName: string = "leads") {
  console.log('Submitting to Airtable:', { data, tableName, baseId: AIRTABLE_BASE_ID });
  
  if (!AIRTABLE_BASE_ID || AIRTABLE_BASE_ID === "your_base_id") {
    throw new Error('Airtable Base ID not configured');
  }
  
  if (!AIRTABLE_API_KEY || AIRTABLE_API_KEY === "your_api_key") {
    throw new Error('Airtable API Key not configured');
  }
  
  try {
    const encodedTableName = encodeURIComponent(tableName);
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}`;
    console.log('Making request to:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: data
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable API error details:', errorText);
      console.error('Response status:', response.status);
      console.error('Request data was:', JSON.stringify(data, null, 2));
      throw new Error(`Airtable API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Airtable success:', result);
    return result;
  } catch (error) {
    console.error('Airtable submission error:', error);
    throw error;
  }
}

export async function getFromAirtable(tableName: string = "leads", maxRecords: number = 100) {
  try {
    const encodedTableName = encodeURIComponent(tableName);
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?maxRecords=${maxRecords}`, {
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      }
    });

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const result = await response.json();
    return result.records;
  } catch (error) {
    console.error('Airtable fetch error:', error);
    throw error;
  }
}
