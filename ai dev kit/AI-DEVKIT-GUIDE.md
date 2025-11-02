# Hướng dẫn sử dụng ai-devkit trong Cursor

## Tổng quan
ai-devkit là một công cụ hỗ trợ phát triển phần mềm với AI, tích hợp với Cursor thông qua MCP (Model Control Protocol).

## Các lệnh chính của ai-devkit

### 1. Quản lý yêu cầu (Requirements)
```bash
# Tạo yêu cầu mới
ai-devkit new-requirement

# Xem danh sách yêu cầu
ai-devkit list-requirements

# Xem chi tiết yêu cầu
ai-devkit show-requirement <id>
```

### 2. Thiết kế (Design)
```bash
# Tạo thiết kế mới
ai-devkit new-design

# Xem danh sách thiết kế
ai-devkit list-designs

# Review thiết kế
ai-devkit review-design <id>
```

### 3. Thực thi kế hoạch (Implementation)
```bash
# Tạo kế hoạch thực thi
ai-devkit create-plan

# Xem danh sách kế hoạch
ai-devkit list-plans

# Thực thi kế hoạch
ai-devkit execute-plan <id>
```

### 4. Quản lý dự án
```bash
# Khởi tạo dự án mới
ai-devkit init

# Cập nhật cấu hình
ai-devkit update-config

# Xem trạng thái dự án
ai-devkit status
```

## Sử dụng trong Cursor

### Cách 1: Thông qua Terminal tích hợp
1. Mở Terminal trong Cursor (`Ctrl + `` ` hoặc `View > Terminal`)
2. Chạy các lệnh ai-devkit trực tiếp

### Cách 2: Thông qua MCP Commands
1. Mở Command Palette (`Cmd + Shift + P`)
2. Tìm kiếm "ai-devkit" hoặc "MCP"
3. Chọn lệnh tương ứng

### Cách 3: Sử dụng AI Assistant
Bạn có thể yêu cầu AI Assistant trong Cursor:
- "Tạo một yêu cầu mới cho tính năng X"
- "Review thiết kế của component Y"
- "Tạo kế hoạch thực thi cho module Z"

## Workflow đề xuất

1. **Phân tích yêu cầu**: Sử dụng `new-requirement` để tạo yêu cầu chi tiết
2. **Thiết kế**: Dùng `new-design` để tạo thiết kế dựa trên yêu cầu
3. **Review**: Sử dụng `review-design` để kiểm tra thiết kế
4. **Lập kế hoạch**: Dùng `create-plan` để tạo kế hoạch thực thi
5. **Thực thi**: Sử dụng `execute-plan` để bắt đầu coding

## Troubleshooting

### Lỗi MCP không kết nối được
```bash
# Kiểm tra ai-devkit có hoạt động không
ai-devkit --version

# Khởi động lại MCP server
ai-devkit start-mcp-server
```

### Lỗi cấu hình
```bash
# Kiểm tra file cấu hình
cat .ai-devkit.json

# Reset cấu hình
ai-devkit init --force
```

## Tài liệu tham khảo
- [GitHub Repository](https://github.com/codeaholicguy/ai-devkit)
- [Bài viết hướng dẫn](https://codeaholicguy.com/2025/10/18/my-engineering-workflow-in-cursorai/)

