using API.Data;
using API.Entities;
using DatingApp.API.Controllers;
using DatingApp.API.DTOs;
using DatingApp.API.Extentions;
using DatingApp.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class MembersController(AppDbContext context, ITokenService tokenService) : BaseApiController
    {
        private readonly ITokenService _tokenService = tokenService;

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<UserDto>>> GetMembers()
        {
            var users = await context.Users.ToListAsync();
            return users.Select(user => user.ToDto(_tokenService)).ToList();
          
        }

        [Authorize]
        [HttpGet("{id}")] // localhost:5001/api/members/bob-id
        public async Task<ActionResult<AppUser>> GetMember(string id)
        {
            var member = await context.Users.FindAsync(id);
            if (member == null) return NotFound();
            return member;
        }
    }
}
