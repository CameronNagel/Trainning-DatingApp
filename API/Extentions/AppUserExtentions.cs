using System;
using API.Entities;
using DatingApp.API.DTOs;
using DatingApp.API.Interfaces;

namespace DatingApp.API.Extentions;

public static class AppUserExtentions
{
    public static UserDto ToDto(this AppUser user, ITokenService tokenService)
    {
        return new UserDto
        {
            Id = user.Id,
            DisplayName = user.DisplayName,
            Email = user.Email,
            Token = tokenService.CreateToken(user)
        };
    }
   
}
