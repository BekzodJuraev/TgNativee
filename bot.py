from pyrogram import Client
from pyrogram.enums import ChatAction,ParseMode
from pyrogram.handlers import MessageHandler
from pyrogram.types import Message
api_id = '26340505'
api_hash = '7960c20df051be9831dbc9919926393b'
from pyrogram import filters

client=Client('me_client', api_id, api_hash)




@client.on_message(filters.chat('@lsbnvVm9TmhjZDNi') & filters.text)
def all_message(client:Client,message:Message):

    if message.from_user.id or  client.get_me().id:

        channel_link = message.text
        channel_username = channel_link.split('/')[-1]
        chat = client.get_chat("@" + channel_username)
        payload = f"Название канала:{chat.title}\nПодписчики:{chat.members_count}"

        client.send_message('@lsbnvVm9TmhjZDNi', payload)

        if chat.photo is not None:
            file_path = client.download_media(chat.photo.big_file_id, file_name="channel_photo.jpg")
            with open(file_path, "rb") as photo:
                client.send_photo("@lsbnvVm9TmhjZDNi", photo)



client.run()





