using System;
using System.Text.Json.Serialization;

namespace FilmComments.RestAPIs.Model
{
    public record ErrorResponse
    {
        [JsonPropertyName(name: "message")]
        public string Message { get; set; }

        [JsonPropertyName(name: "timestamp")]
        public DateTime TimeStamp { get; set; }
    }
}
