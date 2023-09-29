
import json

def create_srt_from_json(subtitle_data):
    try:
        srt_entries = []
        data=json.loads(subtitle_data)
        subtitle_id=1
        for entry in data:
            starting_timestamp = entry["startingTimestamp"]
            ending_timestamp = entry["endingTimestamp"]
            subtitle_text = entry["subtitle"]

            start_timestamp = f"{starting_timestamp[:8]},{starting_timestamp[9:]}"
            end_timestamp = f"{ending_timestamp[:8]},{ending_timestamp[9:]}"
            srt_entry = f"{subtitle_id}\n{start_timestamp} --> {end_timestamp}\n{subtitle_text}\n\n"
            srt_entries.append(srt_entry)
            subtitle_id+=1
        return srt_entries
    except Exception as e:
        print(f"An error occurred: {str(e)}")
