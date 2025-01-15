//news section
document.addEventListener('click', function (e) {
	if (e.target.closest('.playBtn-news')) {
		const playButton = e.target.closest('.playBtn-news');
		const playIcon = playButton.querySelector('.fa-play');
		const pauseIcon = playButton.querySelector('.fa-pause');
		const audio = document.getElementById('audio-news');

		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}

		playIcon.classList.toggle('hidden');
		pauseIcon.classList.toggle('hidden');
	}
});

//toplist section
const allTracks = document.querySelectorAll('.toplist-audio');
const playButtons = document.querySelectorAll('.playBtn');

allTracks.forEach(track => {
	track.volume = 0.3;
});

let currentTrack = null;

playButtons.forEach((playButton, index) => {
	playButton.addEventListener('click', function () {
		const audio = allTracks[index];
		const playIcon = this.querySelector('.fa-play');
		const pauseIcon = this.querySelector('.fa-pause');

		if (audio === currentTrack && !audio.paused) {
			audio.pause();
			playIcon.classList.remove('hidden');
			pauseIcon.classList.add('hidden');
			currentTrack = null;
		} else {
			if (currentTrack && !currentTrack.paused) {
				const currentButton = Array.from(playButtons).find(
					idx => allTracks[idx] === currentTrack
				);
				currentTrack.pause();
				currentTrack.currentTime = 0;
				if (currentButton) {
					const currentPlayIcon = currentButton.querySelector('.fa-play');
					const currentPauseIcon = currentButton.querySelector('.fa-pause');
					currentPlayIcon.classList.remove('hidden');
					currentPauseIcon.classList.add('hidden');
				}
			}
			audio.play();
			playIcon.classList.add('hidden');
			pauseIcon.classList.remove('hidden');
			currentTrack = audio;
		}
	});
});
