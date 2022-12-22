window.onSpotifyWebPlaybackSDKReady = () => {
            
    if (nameDevices == "" || nameDevices == null) {
        noName();
    }
    const player = new Spotify.Player({
        name: nameDevices,
        getOAuthToken: cb => { cb(token); },
        volume: 0.8
    });

    document.getElementById("NameDe").innerHTML ="Název zařízení: " + nameDevices + " ";
          // Ready
          player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            document.getElementById("jmenoP").innerHTML = "Ready";
  
            var url = "https://api.spotify.com/v1/me/player";
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url);

            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Authorization", "Bearer " + token);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 400) {
                        console.log(xhr.responseText);
                    };
                }};

                var data = '{"device_ids":["' + device_id + '"]}';

                //console.log("aa " + data);

                sleep(2000);

                xhr.send(data);
            });
            player.activateElement();

            player.addListener('player_state_changed', ({
                position,
                duration,
                track_window: { current_track },
                disallows: { pausing }
            }) => {
                //console.log('Currently Playing', current_track);
                //console.log('Position in Song', position);
                //console.log('Duration of Song', duration);
                //console.log('A', pausing);
                pauseSo = pausing;
                positionSo = Math.floor(position/1000);
                durationSo = Math.floor(duration/1000);
                var pocetautoru = current_track.artists.length;
                var momentalneautoru = 0;
                var autori;
            
                document.getElementById("jmenoP").innerHTML = current_track.name;
                document.getElementById("obrazekAlba").src= current_track.album.images[2].url;
                document.getElementById("jmenoP").href = "https://open.spotify.com/track/" + current_track.id;
 
                do {
         
                    if (momentalneautoru == 0) {
                        autori = current_track.artists[momentalneautoru].name;
                    } else {
                        autori = autori + ", " + current_track.artists[momentalneautoru].name;
                    }
                    momentalneautoru++;
                } while (pocetautoru != momentalneautoru);
                document.getElementById("autorP").innerHTML = autori;
                
 
            });
 
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
                document.getElementById("jmenoP").innerHTML = 'Device ID has gone offline';
                document.getElementById("autorP").innerHTML = "";
                document.getElementById("obrazekAlba").src = "./image/error.png";
            });
 
 
            player.addListener('initialization_error', ({ message }) => {
                console.error(message);
                document.getElementById("jmenoP").innerHTML = message;
                document.getElementById("autorP").innerHTML = "";
                document.getElementById("obrazekAlba").src = "./error.png";
 
            });
 
            player.addListener('authentication_error', ({ message }) => {
                console.error(message);
                document.getElementById("jmenoP").innerHTML = message;
                document.getElementById("autorP").innerHTML = "";
                document.getElementById("obrazekAlba").src = "./error.png";
            });

            player.addListener('account_error', ({ message }) => {
                console.error(message);
                document.getElementById("jmenoP").innerHTML = message;
                document.getElementById("autorP").innerHTML = "";
                document.getElementById("obrazekAlba").src = "./error.png";
            });

            document.getElementById('togglePlay').onclick = function() {
                player.togglePlay();                
            };

            document.getElementById('next').onclick = function() {
                player.nextTrack();
            };

            document.getElementById('back').onclick = function() {
                player.previousTrack();
            };

            player.connect();
        }
    
