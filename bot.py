from pyrogram import Client
import requests
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
        chat =  client.get_chat("@" + channel_username)
        total_view =  client.get_chat_history("@" + channel_username,limit=5)
        send_view=0
        for views in total_view:
            send_view+=views.views






        payload = {
            'name': chat.title,
            'subscribers': chat.members_count,
            'chanel_link':channel_link,
            'views':send_view
        }

        #client.send_message('@lsbnvVm9TmhjZDNi', payload)



        if chat.photo is not None:
            file_path = client.download_media(chat.photo.big_file_id, file_name="channel_photo.jpg")
            response = requests.post('https://efdc-217-30-171-58.ngrok-free.app/api/',
                                     files={'pictures': open(file_path, 'rb')}, data=payload)
            client.send_message('@lsbnvVm9TmhjZDNi', payload)
            with open(file_path, "rb") as photo:
                client.send_photo("@lsbnvVm9TmhjZDNi", photo)
        else:
            response = requests.post('https://efdc-217-30-171-58.ngrok-free.app/api/', data=payload)
            client.send_message('@lsbnvVm9TmhjZDNi', payload)


client.run()





