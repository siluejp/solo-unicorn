from django.db import transaction
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import PageAccessCounter


@api_view(["GET"])
def health_view(_request):
    return Response({"status": "ok"})


@api_view(["GET", "POST"])
def top_access_view(request):
    with transaction.atomic():
        counter, _ = PageAccessCounter.objects.select_for_update().get_or_create(page="top")
        if request.method == "POST":
            counter.count += 1
            counter.save(update_fields=["count", "updated_at"])

    return Response({"page": counter.page, "count": counter.count})
