using System;
namespace FilmComments.RestAPIs.Model
{
    public record CommentToSave
    {
        public int UserId { get; set; }
        public int MovieId { get; set; }
        public string Body { get; set; }
    }
}
