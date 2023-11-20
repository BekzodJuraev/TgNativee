from django.core.management.base import BaseCommand
from accounts.bot import  run_userbot
from API.models import Add_userbot
import asyncio
import time
class Command(BaseCommand):
    help = 'Run the Pyrogram userbot'
    prev_userbot_count = 0

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting Pyrogram userbot...'))
        asyncio.run(run_userbot())