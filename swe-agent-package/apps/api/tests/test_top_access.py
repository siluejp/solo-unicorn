import pytest


pytestmark = pytest.mark.django_db


def test_top_access_initial_value(client):
    response = client.get("/api/top-access/")
    assert response.status_code == 200
    assert response.json() == {"page": "top", "count": 0}


def test_top_access_increments_on_post(client):
    first = client.post("/api/top-access/")
    second = client.post("/api/top-access/")

    assert first.status_code == 200
    assert second.status_code == 200
    assert first.json() == {"page": "top", "count": 1}
    assert second.json() == {"page": "top", "count": 2}


def test_top_access_get_does_not_increment_count(client):
    incremented = client.post("/api/top-access/")
    first_get = client.get("/api/top-access/")
    second_get = client.get("/api/top-access/")

    assert incremented.status_code == 200
    assert first_get.status_code == 200
    assert second_get.status_code == 200
    assert incremented.json() == {"page": "top", "count": 1}
    assert first_get.json() == {"page": "top", "count": 1}
    assert second_get.json() == {"page": "top", "count": 1}
