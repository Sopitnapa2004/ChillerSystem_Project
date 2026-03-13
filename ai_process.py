import pandas as pd
import pyodbc

# Database configuration
DB_CONFIG = {
    'DRIVER': '{SQL Server}',
    'SERVER': '141.98.17.49\\SQLSERVER,50122',
    'DATABASE': 'user',  # เปลี่ยนเป็นฐานข้อมูลจริงถ้ามี
    'UID': 'user',
    'PWD': 'Seagate@1234'
}

def get_connection(cfg):
    conn_str = ';'.join([f"{k}={v}" for k, v in cfg.items()])
    return pyodbc.connect(conn_str)

def load_chiller_data(conn):
    query = "SELECT id, chiller_no, building, power_per_ton, timestamp FROM tblActualValue"
    return pd.read_sql(query, conn)

def find_anomalies(df):
    return df[df['power_per_ton'] > 0.75]

def save_alert(conn, row):
    alert_msg = f"Chiller {row['chiller_no']} อาคาร {row['building']} Power/Ton เกิน 0.75"
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO alert_log (chiller_id, alert_message, timestamp) VALUES (?, ?, GETDATE())",
        row['id'], alert_msg
    )
    conn.commit()

def main():
    try:
        conn = get_connection(DB_CONFIG)
        df = load_chiller_data(conn)
        anomalies = find_anomalies(df)
        if not anomalies.empty:
            print("Chiller ที่มี Power/Ton เกิน 0.75:")
            print(anomalies[['chiller_no', 'building', 'power_per_ton', 'timestamp']])
            for _, row in anomalies.iterrows():
                save_alert(conn, row)
        else:
            print("ไม่มี Chiller ที่มีปัญหา")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        conn.close()

if __name__ == '__main__':
    main()
