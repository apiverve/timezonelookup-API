"""
Timezone Lookup API - Basic Usage Example

This example demonstrates the basic usage of the Timezone Lookup API.
API Documentation: https://docs.apiverve.com/ref/timezonelookup
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/timezonelookup'

def call_timezonelookup_api():
    """
    Make a GET request to the Timezone Lookup API
    """
    try:
        # Query parameters
        params &#x3D; {&#x27;city&#x27;: &#x27;Harare&#x27;}

        headers = {
            'x-api-key': API_KEY
        }

        response = requests.get(API_URL, headers=headers, params=params)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Timezone Lookup API...\n')

    result = call_timezonelookup_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
