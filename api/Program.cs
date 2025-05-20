var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});
// Add services
builder.Services.AddControllers();
var app = builder.Build();
// ✅ เปิด CORS ให้ทุก origin
app.UseCors("AllowAll");
// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }
// Middleware

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers(); // ต้องมีบรรทัดนี้

app.Run();
