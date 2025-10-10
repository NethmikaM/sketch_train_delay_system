<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk Train Delay Predictor</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="cyber-grid"></div>
    <div class="scan-line"></div>

    <div class="container">
        <div class="header">
            <h1>TRAIN DELAY PREDICTOR</h1>
            <p class="subtitle">AI POWERED • REAL-TIME FORECASTING</p>
        </div>

        <div class="form-container">
            <form id="delayForm" method="POST" action="{{ url_for('train_delay_4') }}">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="train_name">TRAIN NAME</label>
                        <select id="train_name" name="train_name" required>
                            <option value="Udarata Menike">Udarata Menike</option>
                            <option value="Podi Menike">Podi Menike</option>
                            <option value="Ruhunu Kumari">Ruhunu Kumari</option>
                            <option value="Yal Devi">Yal Devi</option>
                            <option value="Udaya Devi">Udaya Devi</option>
                            <option value="Rajarata Rejini">Rajarata Rejini</option>
                            <option value="Intercity Express">Intercity Express</option>
                            <option value="Samudra Devi">Samudra Devi</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="route">ROUTE</label>
                        <select id="route" name="route" required>
                            <option>Anuradhapura-Colombo</option>
                            <option>Batticaloa-Colombo</option>
                            <option>Colombo-Anuradhapura</option>
                            <option>Colombo-Badulla</option>
                            <option>Colombo-Batticaloa</option>
                            <option>Colombo-Jaffna</option>
                            <option>Colombo-Kandy</option>
                            <option>Colombo-Matara</option>
                            <option>Colombo–Anuradhapura</option>
                            <option>Galle-Colombo</option>
                            <option>Jaffna-Colombo</option>
                            <option>Kandy-Colombo</option>
                            <option>Maradana-Galle</option>
                            <option>Matara-Colombo</option>
                            <option>Matara-Maradana</option>
                            <option>matara-colombo</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="day_of_week">DAY</label>
                        <select id="day_of_week" name="day_of_week" required>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="holiday">HOLIDAY</label>
                        <select id="holiday" name="holiday" required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="temperature">TEMPERATURE (°C)</label>
                        <input type="number" id="temperature" name="temperature" value="25" min="-10" max="50" required>
                    </div>

                    <div class="form-group">
                        <label for="weather">WEATHER</label>
                        <select id="weather" name="weather" required>
                            <option value="sunny">Sunny</option>
                            <option value="rainy">Rainy</option>
                            <option value="cloudy">Cloudy</option>
                        </select>
                    </div>

                    <button type="submit" class="submit-btn">CALCULATE DELAY</button>
                </div>
            </form>
        </div>

        <div class="result-container {% if delay is not none %}visible{% endif %}" id="resultContainer">
            <div class="result-title">PREDICTED DELAY</div>
            <div class="result-value" id="resultValue">
                {% if delay is not none %}
                    {{ delay }} MINUTES
                {% else %}
                    0 MINUTES
                {% endif %}
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>