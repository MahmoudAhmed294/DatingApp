namespace API.DTOs
{
    public class UserDto
    {
        public string UserName {get; set;}        
        public string Token {get; set;}        
        public string PhotoUrl { get; set; }
        public string KnownsAs { get; set; }

        public string Gender { get; set; }
    }
}