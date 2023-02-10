function secondsToHms(value) {
    const sec = parseInt(value, 10); 
    let hours = Math.floor(sec / 3600); 
    let minutes = Math.floor((sec - hours * 3600) / 60); 
    let seconds = sec - hours * 3600 - minutes * 60;
    if (hours < 10) {      hours = '0' + hours;    }
    if (minutes < 10) {      minutes = '0' + minutes;    }
    if (seconds < 10) {      seconds = '0' + seconds;    }
    if (hours == 0) {
      return +minutes + ':' + seconds; // Return in MM:SS format
    } else {
      return hours + ':' + minutes + ':' + seconds; // Return in HH:MM:SS format
    }
  }
  
  function convertHMS(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600); 
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; 
}
 
  export  {secondsToHms,convertHMS}