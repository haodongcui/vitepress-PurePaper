---
title: Latex 找出bib文件中重复条目
tags:
  - Latex
  - Python
categories:
  - "技术经验\r"
date: 2025-01-20 16:23:49
abbrlink: 25012016
updated: 2024-10-29 22:49
---

创建 `check.py `，写入如下代码
```python
from collections import defaultdict

def find_and_remove_duplicates(bib_file):
    entries = defaultdict(list)
    try:
        with open(bib_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        current_key = None
        for line in lines:
            line = line.strip()
            if line.startswith('@'):
                try:
                    # Extract the citation key
                    current_key = line.split('{')[1].split(',')[0]
                    entries[current_key].append(line)
                except IndexError:
                    print(f"Skipping malformed entry: {line}")
    
        duplicates = {key: value for key, value in entries.items() if len(value) > 1}
        
        if duplicates:
            # Create a set to keep track of keys that have been processed
            processed_keys = set()
            new_lines = []
            current_key = None
            for line in lines:
                line_stripped = line.strip()
                if line_stripped.startswith('@'):
                    try:
                        current_key = line_stripped.split('{')[1].split(',')[0]
                        if current_key in processed_keys:
                            continue  # Skip duplicate entries
                        processed_keys.add(current_key)
                    except IndexError:
                        print(f"Skipping malformed entry: {line_stripped}")
                new_lines.append(line)
            
            # Write the modified content back to the file
            with open(bib_file, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            
            print(f"Removed duplicates from '{bib_file}'.")
            return duplicates
        else:
            print("No duplicates found.")
            return {}
    except FileNotFoundError:
        print(f"Error: File '{bib_file}' not found.")
        return {}
    except UnicodeDecodeError:
        print(f"Error: File '{bib_file}' is not UTF-8 encoded.")
        return {}

duplicates = find_and_remove_duplicates('./ref.bib')
if duplicates:
    for key, lines in duplicates.items():
        print(f"Duplicate key: {key}")
        # for line in lines:
            # print(line)
```

将 `./ref.bib` 替换为你的 `.bib` 的路径，运行 py 文件即可。