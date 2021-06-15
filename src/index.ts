import { Bulb, Client } from 'tplink-smarthome-api';

const client = new Client();
client.getDevice({ host: '192.168.1.241' }).then((device) => {
    device.getSysInfo().then(console.log);

    const loop = () => {
        const hue = Math.floor(Math.random() * 360);
    }
});
