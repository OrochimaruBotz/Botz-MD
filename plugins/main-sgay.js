let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/b2342e43791d13bbd5eea.png', m, { packname: "GojoBotzMD", author: "@humanz" })
}

handler.customPrefix = /^(gay)$/i
handler.command = new RegExp

module.exports = handler
