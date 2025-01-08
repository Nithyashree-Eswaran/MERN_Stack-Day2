function updateClock() {
    const date = new Date();


    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();

   
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

  
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = weekdays[dayOfWeek];

   // Update the clock
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${dayName}, ${day}/${month}/${year}`;
}

// Update the clock every second
setInterval(updateClock, 1000);


updateClock();
