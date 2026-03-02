from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .schemas import AlertItem, KPIResponse

app = FastAPI(title='AI Model Monitoring API', version='0.1.0')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get('/health')
def healthcheck() -> dict[str, str]:
    return {'status': 'ok'}


@app.get('/kpis', response_model=KPIResponse)
def get_kpis() -> KPIResponse:
    return KPIResponse(
        accuracy=94.3,
        latency_ms=186,
        prediction_volume=128420,
        data_drift=6.4
    )


@app.get('/alerts', response_model=list[AlertItem])
def get_alerts() -> list[AlertItem]:
    return [
        AlertItem(
            severity='critical',
            message='Fraud Detector accuracy dropped below 93%',
            timestamp='2 mins ago'
        ),
        AlertItem(
            severity='warning',
            message='Data drift rose above 6% on Recommender v1',
            timestamp='13 mins ago'
        )
    ]
