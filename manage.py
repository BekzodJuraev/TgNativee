#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import asyncio
import sys
import threading


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'TgNativee.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)




if __name__ == '__main__':
    # Create a thread for running run_userbot asynchronously
    #userbot_thread = threading.Thread(target=run_userbot_async)

    main()





    # Wait for the userbot_thread to finish
    #userbot_thread.join()