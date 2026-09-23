<!-- GitHub: git@github.com:rick-peng-li/MERN-Stack-Hospital-Management-System-Web-Application-web.git -->

# 医院管理系统 Web 项目

这是一个基于 MERN 技术栈实现的医院管理系统，包含患者端站点、后台管理端和 Node.js 后端服务三部分。项目围绕患者注册、登录、预约挂号、留言咨询、医生管理、管理员管理与预约审核等核心流程展开，前后端接口已经形成基本闭环，适合作为全栈课程项目、作品集项目或二次开发基础工程。

## 项目组成

- `frontend`：患者端网站
- `dashboard`：管理员后台
- `backend`：Express + MongoDB API 服务

## 核心功能

### 患者端 `frontend`

- 首页展示医院介绍、科室轮播、留言表单
- 患者注册、登录、退出登录
- 获取当前登录患者信息
- 预约表单按科室拉取医生列表
- 登录后可提交预约
- 新增“我的预约”页面，可查看个人预约记录
- 新增患者侧取消预约能力，已通过的预约仅允许线下联系处理

### 管理端 `dashboard`

- 管理员登录、退出登录
- 仪表盘展示真实预约数、医生数、消息数
- 查看全部预约并更新预约状态
- 查看全部留言消息
- 查看全部医生信息
- 新增管理员
- 新增医生并上传头像

### 后端 `backend`

- JWT + Cookie 鉴权
- MongoDB 数据持久化
- Cloudinary 医生头像上传
- 统一错误处理中间件
- 新增健康检查接口 `/api/v1/health`
- 新增患者预约查询与取消接口

## 页面说明

### 患者端页面

- `/`：首页，包含医院介绍、科室展示、留言入口
- `/about`：医院介绍页
- `/appointment`：预约挂号页
- `/register`：患者注册页
- `/login`：患者登录页
- `/my-appointments`：当前患者的预约列表页

### 管理端页面

- `/login`：管理员登录页
- `/`：仪表盘首页
- `/doctors`：医生列表页
- `/messages`：留言列表页
- `/doctor/addnew`：新增医生页
- `/admin/addnew`：新增管理员页

## 接口说明

### 用户与鉴权

- `POST /api/v1/user/patient/register`：患者注册
- `POST /api/v1/user/login`：患者/管理员登录
- `GET /api/v1/user/patient/me`：获取当前患者信息
- `GET /api/v1/user/admin/me`：获取当前管理员信息
- `GET /api/v1/user/patient/logout`：患者退出登录
- `GET /api/v1/user/admin/logout`：管理员退出登录
- `GET /api/v1/user/doctors`：获取全部医生列表
- `POST /api/v1/user/admin/addnew`：新增管理员
- `POST /api/v1/user/doctor/addnew`：新增医生

### 预约

- `POST /api/v1/appointment/post`：患者提交预约
- `GET /api/v1/appointment/mine`：获取当前患者的预约列表
- `GET /api/v1/appointment/getall`：管理员获取全部预约
- `PUT /api/v1/appointment/update/:id`：管理员更新预约状态
- `DELETE /api/v1/appointment/delete/:id`：管理员删除预约
- `DELETE /api/v1/appointment/cancel/:id`：患者取消自己的预约

### 留言

- `POST /api/v1/message/send`：患者提交留言
- `GET /api/v1/message/getall`：管理员获取全部留言

### 系统

- `GET /api/v1/health`：服务健康检查

## 技术架构

### 前端

- React 18
- Vite 5
- React Router 6
- Axios
- React Toastify
- React Icons
- React Multi Carousel

### 后端

- Node.js
- Express 4
- MongoDB + Mongoose
- JSON Web Token
- Cookie Parser
- CORS
- Express File Upload
- Cloudinary

## 目录结构

```text
MERN-Stack-Hospital-Management-System-Web-Application-web
├── backend
│   ├── controller
│   ├── database
│   ├── middlewares
│   ├── models
│   ├── router
│   ├── utils
│   ├── server.js
│   └── .env.example
├── dashboard
│   ├── public
│   ├── src
│   │   ├── components
│   │   └── utils
│   └── .env.example
├── frontend
│   ├── public
│   ├── src
│   │   ├── Pages
│   │   ├── components
│   │   └── utils
│   └── .env.example
└── README.md
```

## 启动方式

### 1. 安装依赖

分别进入三个子项目安装依赖：

```bash
cd backend && npm install
cd frontend && npm install
cd dashboard && npm install
```

### 2. 配置环境变量

#### 后端 `backend/config.env`

可参考 `backend/.env.example`：

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017
JWT_SECRET_KEY=replace-with-a-secure-secret
JWT_EXPIRES=7d
COOKIE_EXPIRE=7
FRONTEND_URL_ONE=http://localhost:5173
FRONTEND_URL_TWO=http://localhost:5174
DASHBOARD_URL=http://localhost:5174
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

#### 患者端 `frontend/.env`

```env
VITE_API_BASE_URL=http://localhost:5000
```

#### 管理端 `dashboard/.env`

```env
VITE_API_BASE_URL=http://localhost:5000
```

### 3. 启动开发环境

后端：

```bash
npm run dev
```

患者端：

```bash
npm run dev
```

管理端：

```bash
npm run dev
```

默认本地访问地址：

- 患者端：`http://localhost:5173`
- 管理端：`http://localhost:5174`
- 后端：`http://localhost:5000`

## 构建命令

患者端构建：

```bash
cd frontend && npm run build
```

管理端构建：

```bash
cd dashboard && npm run build
```

## 当前说明

- 项目界面与主要业务文案保持英文，README 使用中文说明
- 项目内已清理默认 Vite README、未引用素材与部分无用大图
- 前端接口地址已改为环境变量配置，便于本地和部署环境切换
- 若首次使用项目且数据库中没有管理员账号，需要先在数据库中准备管理员账户，或基于现有管理员账号登录后台后再新增管理员
