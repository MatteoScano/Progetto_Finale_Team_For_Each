using System;
using System.Collections.Generic;
using FilmComments.Core.BL;
using FilmComments.Core.Exceptions;
using FilmComments.Core.Model;
using FilmComments.RestAPIs.Model;
using Microsoft.AspNetCore.Mvc;

namespace FilmComments.RestAPIs.Controllers
{
    [ApiController]
    [Route("comments")]
    public class CommentController : ControllerBase
    {
        private CommentService _filmCommentService;

        public CommentController(CommentService filmCommentService)
        {
            _filmCommentService = filmCommentService;
        }

        [HttpGet]
        public ActionResult<List<Comment>> GetAll([FromQuery(Name = "user-id")] int userId = 0)
        {
            if (userId > 0)
            {
                return Ok(_filmCommentService.GetAllCommentsByUserId(userId));
            }

            return Ok(_filmCommentService.GetAllComments());
        }

        [HttpGet]
        [Route("{comment-id}")]
        public ActionResult<Comment> GetById([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                return Ok(_filmCommentService.GetCommentById(commentId));
            }
            catch (CommentNotFoundException e)
            {
                return NotFound(BuildErrorResponse(e));
            }
        }

        [HttpPost]
        public ActionResult<Comment> Add([FromBody] CommentToSave comment)
        {
            try
            {
                return Ok(_filmCommentService.AddComment(new()
                {
                    Body = comment.Body,
                    UserId = comment.UserId,
                    MovieId = comment.MovieId
                }));
            }
            catch (CommentBodyTooShortException e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (CommentNotRelatedToMovieException e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (CommentNotRelatedToUserException e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
        }

        [HttpPut]
        [Route("{comment-id}")]
        public ActionResult<Comment> Update([FromBody] CommentToSave comment, [FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                return Ok(_filmCommentService.UpdateCommentById(commentId, new()
                {
                    Body = comment.Body,
                    UserId = comment.UserId,
                    MovieId = comment.MovieId
                }));
            }
            catch (CommentNotFoundException e)
            {
                return NotFound(BuildErrorResponse(e));
            }
            catch (CommentBodyTooShortException e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (CommentNotRelatedToMovieException e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
            catch (CommentNotRelatedToUserException e)
            {
                return BadRequest(BuildErrorResponse(e));
            }
        }

        [HttpDelete]
        [Route("{comment-id}")]
        public ActionResult Delete([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                _filmCommentService.DeleteCommentById(commentId);
                return NoContent();
            }
            catch (CommentNotFoundException e)
            {
                return NotFound(BuildErrorResponse(e));
            }
        }

        private static ErrorResponse BuildErrorResponse(Exception e) => new()
        {
            Message = e.Message,
            TimeStamp = DateTime.Now
        };

    }
}
