import fs from 'fs';
const handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `uhm.. che nome do al plugin?`;
  if (!m.quoted.text) throw `Rispondi al msg!`;
  const path = `plugins/${text}.js`;
  await fs.writeFileSync(path, m.quoted.text);
  m.reply(`Salvato come ${path}`);
};
handler.help = ['saveplugin'].map((v) => v + ' <nombre>');
handler.tags = ['owner'];
handler.command = ['save', 'saveplugin'];

handler.rowner = true;
export default handler;
