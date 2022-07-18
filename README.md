1. Clone the project locally in your machine
```bash
    git clone https://github.com/FHJBC/foodzero.git
```
2. Install the project's dependencies
```bash
    cd foodzero/api
    yarn install
    yarn start
```
```bash
    cd foodzero/client
    npm install --legacy-peer-deps
    npm run dev
```

After running *npm install --legacy-peer-deps* for the *client* project, add a property called **focused?: string | boolean | undefined;** to **interface InputHTMLAttributes<T> extends HTMLAttributes<T>** of the **namespace React** which is in **client/node_modules/@types/react/index.d.ts**

```bash
    cd foodzero/admin
    npm install --legacy-peer-deps
    npm run dev
```

# Pour la config de l'url de la base de données
1. Créer un nouveau compte sur: [MongoDB Atlas](https://cloud.mongodb.com)

## Create a new account on MongoDB Atlas: https://cloud.mongodb.com
1. Create a Project (Click on the **Create** button)
2. Create New Cluster
3. Shared
4. Choose a Cloud Provider & Region
5. Create Cluster 
6. Once the cluster will be created, then click on the **Database** under the **DEPLOYMENT** section
7. Click on **Connect** button (right to the cluster name)
8. A Pop Up window will display and choose **Connect your application**
9. Finally, you will get your database url like the one below:
```bash
    mongodb+srv://<your username on cloud.mongodb.com>:<your password>@cluster0.wmjwv.mongodb.net/?retryWrites=true&w=majority
```

10. Copy this URL and paste it as the value of **dbUri** property inside the *api/config/default.ts* file 
11. Still on https://cloud.mongodb.com, under the **SECURITY** section, click on **Network Access** and put **0.0.0.0** in the **IP Address**

Make sure that you have the *nodemon* package installed as well.