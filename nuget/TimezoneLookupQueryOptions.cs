using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TimezoneLookup
{
    /// <summary>
    /// Query options for the Timezone Lookup API
    /// </summary>
    public class TimezoneLookupQueryOptions
    {
        /// <summary>
        /// The city name for which you want to get the data (e.g., Harare)
        /// Example: Harare
        /// </summary>
        [JsonProperty("city")]
        public string City { get; set; }
    }
}
