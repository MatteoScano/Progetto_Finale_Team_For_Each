using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FilmComments.DB.Model
{
    [Table("comments")]
    public class CommentEntity
    {
        [Column("id"), Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("user_id"), Required]
        public int UserId { get; set; }

        [Column("movie_id"), Required]
        public int MovieId { get; set; }

        [Column("comment"), Required, DataType(DataType.Text)]
        public string Body { get; set; }
    }
}
