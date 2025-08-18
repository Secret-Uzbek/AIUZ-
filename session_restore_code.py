
# Код для восстановления сессии после перезагрузки

import json

def restore_session():
    with open('/mnt/data/session_log_backup.json', 'r', encoding='utf-8') as f:
        session_data = json.load(f)

    print(f"Восстановление сессии начато с {session_data['session_start']}")
    print("Все действия в сессии были выполнены:")
    for action in session_data['actions']:
        print(f"- {action}")

    print("
Созданные файлы:")
    for file in session_data['files_created']:
        print(f"- {file}")

    print("
Финальное состояние сессии:")
    print(session_data['final_state'])

# Восстановление сессии
restore_session()
