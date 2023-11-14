from django.core.management.base import BaseCommand
from accounts.bot import run_userbot


class Command(BaseCommand):
    help = 'Run the Pyrogram userbot'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting Pyrogram userbot...'))
        run_userbot()
        self.stdout.write(self.style.SUCCESS('Pyrogram userbot has been started successfully.'))