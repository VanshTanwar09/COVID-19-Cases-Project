import joblib
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import numpy as np

# Load model and test data
lr_model = joblib.load('linear_model.pkl')
X_test, y_test = joblib.load('test_data.pkl')

# Predict
y_pred = lr_model.predict(X_test)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mse)

print("Linear Regression Performance on Test Set")
print("-----------------------------------------")
print(f"R² Score: {r2:.4f}")
print(f"Mean Absolute Error: {mae:.2f}")
print(f"Root Mean Squared Error: {rmse:.2f}")
print(f"Mean Squared Error: {mse:.2f}")
print(f"Accuracy (R²): {r2 * 100:.2f}%")
