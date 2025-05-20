using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest req)
    {
        if (req.Username == "admin" && req.Password == "1234")
        {
            // Mock token (ในงานจริง ให้ generate JWT token)
            return Ok(new { token = "mock-jwt-token-123456" });
        }

        return Unauthorized(new { message = "Invalid credentials" });
    }
}

public class LoginRequest
{
    public string? Username { get; set; }
    public string? Password { get; set; }
}
