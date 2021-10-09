using System;
namespace FilmComments.Core.Model
{
    public record Comment
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int MovieId { get; set; }
        public string Body { get; set; }
    }
}
