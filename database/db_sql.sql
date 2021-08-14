CREATE TABLE device(
    uuid VARCHAR(50) NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(100) NOT NULL,
    alerts_config JSON NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

ALTERT TABLE device
    ADD PRIMARY KEY (uuid);



CREATE TABLE alert(
    uuid VARCHAR(50) NOT NULL,
    registered_value FLOAT NOT NULL,
    alert_data JSON NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    device_uuid VARCHAR(50),
    CONSTRAINT fk_device_uuid FOREIGN KEY(device_uuid) REFERENCES device(uuid)
);

ALTER TABLE alert
    ADD PRIMARY KEY (uuid);