from django.db import models


class PageAccessCounter(models.Model):
    page = models.CharField(max_length=64, unique=True)
    count = models.PositiveBigIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.page}:{self.count}"
