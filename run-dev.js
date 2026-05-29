const { spawn } = require('child_process');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env.local') });

const port = process.env.PORT || '3000';

console.log(`\x1b[32m[Subur.in] Menjalankan server pengembangan pada PORT: ${port} (dari .env.local via dotenv)\x1b[0m`);

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const nextDev = spawn(npxCmd, ['next', 'dev', '-p', port], {
  stdio: 'inherit',
  shell: true,
});

nextDev.on('error', (err) => {
  console.error('Gagal memulai server:', err);
});
