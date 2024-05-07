
{
    // Method to redirect to the home page of habits
    $('#startButton').click(function(event)
    {
    event.preventDefault();
    window.location.href = `${process.env.BASE_URL}/habits/dailyView`;
    }
)
}