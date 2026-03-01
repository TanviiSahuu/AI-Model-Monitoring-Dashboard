from pydantic import BaseModel


class KPIResponse(BaseModel):
    accuracy: float
    latency_ms: int
    prediction_volume: int
    data_drift: float


class AlertItem(BaseModel):
    severity: str
    message: str
    timestamp: str
