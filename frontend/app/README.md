# App de Gestión de Clientes

Una aplicación React moderna para gestionar datos de clientes con operaciones CRUD completas. Construida con React 19, TypeScript y TailwindCSS, con validación robusta de formularios y una interfaz limpia y responsiva.


## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configuración del entorno**
   Crea un archivo `.env` en el directorio raíz:
   ```env
   VITE_API_TOKEN=tu_token_de_mockapi_aqui
   ```
   
   > Obtén tu token desde [MockAPI.io](https://mockapi.io/) creando un nuevo proyecto

4. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   
   La aplicación estará disponible en [http://localhost:4000](http://localhost:4000)

## Stack Tecnológico

### Tecnologías Principales
- **React 19** - Última versión de React 
- **TypeScript** - Desarrollo con tipado seguro
- **Vite** - Herramienta de construcción rápida y servidor de desarrollo
- **TailwindCSS 4.x** - Framework CSS utility-first

### Formularios y Validación
- **React Hook Form** - Formularios 
- **Zod** - Validación de esquemas TypeScript-first
- **@hookform/resolvers** - Integración React Hook Form + Zod

### Enrutamiento y Notificaciones
- **React Router DOM** - Enrutamiento del lado del cliente
- **React Toastify** - Notificaciones toast
- **SweetAlert2** - Diálogos de alerta elegantes

## Estructura del proyecto

```
  app/
├── src/
│ ├── customers/                  # Módulo de funcionalidad de clientes
│ │ ├── common/
│ │ │ └── FormField.tsx           # Componente reutilizable de campo de formulario
│ │ ├── components/
│ │ │ └── CustomerForm.tsx        # Componente de formulario de cliente
│ │ ├── pages/
│ │ │ ├── CustomerListPage.tsx    # Página de listado de clientes
│ │ │ └── CustomerFormPage.tsx    # Wrapper de página de formulario
│ │ ├── schemas/
│ │ │ ├── customer.schema.ts      # Esquemas de validación Zod
│ │ │ └── index.ts                # Exportaciones de esquemas
│ │ ├── customer.services.ts      # Funciones de servicio API
│ │ └── customer.types.ts         # Interfaces TypeScript
│ ├── routes/
│ │ └── AppRoutes.tsx             # Enrutamiento de la aplicación
│ ├── shared/                     # Utilidades compartidas
│ │ ├── types.ts                  # Definiciones de tipos comunes
│ │ ├── useNotifications.ts       # Hook de notificaciones
│ │ └── withNotifications.tsx     # HOC de notificaciones
│ ├── App.tsx                     # Componente raíz
│ ├── main.tsx                    # Punto de entrada de la aplicación
│ └── index.css                   # Estilos globales
├── package.json
├── tsconfig.json                 # Configuración TypeScript
├── vite.config.ts                # Configuración Vite
└── README.md

```

## Características

- **Listado de Clientes**: Visualiza todos los clientes en una tabla limpia y responsiva
- **Agregar Clientes**: Crea nuevos registros de clientes con validación completa
- **Editar Clientes**: Actualiza información de clientes existentes
- **Validación de Formularios**: Validación en tiempo real con reglas de negocio
- **Diseño Responsivo**: Funciona perfectamente en escritorio y dispositivos móviles
- **Notificaciones**: Notificaciones de éxito y error para acciones del usuario
- **Interfaz Moderna**: Interfaz limpia construida con TailwindCSS


## API utilizada

Se utiliza [MockAPI](https://mockapi.io/) para simular el backend de clientes.

