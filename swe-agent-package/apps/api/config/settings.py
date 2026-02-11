import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = os.getenv("DJANGO_DEBUG", "1") == "1"
RAW_SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
if DEBUG:
    SECRET_KEY = RAW_SECRET_KEY or "dev-only-secret-key"
elif not RAW_SECRET_KEY or RAW_SECRET_KEY == "dev-only-secret-key":
    raise RuntimeError("DJANGO_SECRET_KEY must be set to a non-default value when DJANGO_DEBUG=0.")
else:
    SECRET_KEY = RAW_SECRET_KEY

RAW_POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
if DEBUG:
    POSTGRES_PASSWORD = RAW_POSTGRES_PASSWORD or "postgres"
elif not RAW_POSTGRES_PASSWORD or RAW_POSTGRES_PASSWORD == "postgres":
    raise RuntimeError("POSTGRES_PASSWORD must be set to a non-default value when DJANGO_DEBUG=0.")
else:
    POSTGRES_PASSWORD = RAW_POSTGRES_PASSWORD

ALLOWED_HOSTS = os.getenv("DJANGO_ALLOWED_HOSTS", "*").split(",")

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "health",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"
ASGI_APPLICATION = "config.asgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("POSTGRES_DB", "solo_unicorn_test"),
        "USER": os.getenv("POSTGRES_USER", "postgres"),
        "PASSWORD": POSTGRES_PASSWORD,
        "HOST": os.getenv("POSTGRES_HOST", "db"),
        "PORT": os.getenv("POSTGRES_PORT", "5432"),
    }
}

AUTH_PASSWORD_VALIDATORS = []

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
