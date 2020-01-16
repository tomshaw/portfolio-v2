// ==========================================================================
// AudioCanvas
// ==========================================================================
import React, {Component} from 'react';

class AudioCanvas extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        let audio = document.getElementById('audioElement');

        let AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext();

        let source = audioContext.createMediaElementSource(audio) || null;
        let analyser = audioContext.createAnalyser();
        source.connect(analyser);
        source.connect(audioContext.destination);

        const waveform = new Float32Array(analyser.frequencyBinCount);
        analyser.getFloatTimeDomainData(waveform);
        (function updateWaveform() {
            requestAnimationFrame(updateWaveform);
            analyser.getFloatTimeDomainData(waveform);
        })();

        const canvas = document.getElementById('audioCanvas');
        canvas.width = waveform.length;
        canvas.height = 100;
        const context = canvas.getContext('2d');

        (function drawOscilloscope() {
            requestAnimationFrame(drawOscilloscope)
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.beginPath();
            //context.strokeStyle="white";
            for (let i = 0; i < waveform.length; i++) {
                const x = i
                const y = (0.5 + waveform[i] / 2) * canvas.height;
                if (i === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }
            context.stroke();
        })();
    }

    render() {
        return (
          <canvas id="audioCanvas"></canvas>
        );
    }
}

export default AudioCanvas;
