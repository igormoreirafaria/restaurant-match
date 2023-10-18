# Best Matched Restaurant

This assessment is made using the following:

- Database : MongoDB
- Backend : Springboot Kotlin
- Frontend : React
- Reverse Proxy: nginx
- Python
- Docker

## Prerequistes

Before you begin, make sure you have the following tool and software installed on your system:

- [Docker Desktop](https://docs.docker.com/engine/install/)

## Steps

### 1. Clone the repository:

```bash
git clone https://github.com/igormoreirafaria/restaurant-match.git
cd restaurant-match
```

### 2. Run the Docker Compose File:

```bash
docker-compose up -d
```
### 3. Access the Application:

- The React frontend will be accessible at [`http://localhost`](http://localhost) and you may use a web browser to test its functionality.

- The SpringBoot backend API will be available at `http://localhost:8080` and you may use an application such as postman to test it.
    - There are currenlty three endpoints available:
    
        - GET `http://localhost:8080/api/restaurants/findAll`
            - This endpoint returns a list of all restaurants from the database.
        - POST `http://localhost:8080/api/restaurants/findByParameters`
            - This endpoint returns a list of restaurants from based on filter parameters. 
            - This request requires the following body:
            ```json
            {
                "restaurantName":  null,
                "customerRating": null,
                "distance": null,
                "price": null,
                "cuisine": null
            }
            ```
            - i.e.: to fetch restaurants that match `"cho"` you may use the following:
            ```json
            {
                "restaurantName":  "cho",
                "customerRating": null,
                "distance": null,
                "price": null,
                "cuisine": null
            }
            ```
        - GET `http://localhost:8080/api/cuisine/findAll`
            - This request returns a list of all cuisines from the database

### 4. Stopping and Cleanup:

```bash
docker-compose down
```

### 5. File Structure and Organization

- The Frontend is located at the `frontend` folder. Here is its structure:

```
frontend
| public
| | images              -> images used in the application
| src
| | components
| | | RestaurantList    -> main component of the application
| | | | api             -> handle backend calls for component
| | | | Filters         -> filter component
| | | | RestaurantItem  -> item component
| | shared
| | | api               -> store axios configuration
| | | filters           -> handle filter funcionality
| | | ghost             -> ghost component displayed while waiting backend response
| | | types             -> DTOs used by the application
```

- The Backend is located at `backend` folder. Here is its structure:

```
backend
| src
| | main
| | | kotlin\com\moreira\restaurant
| | | | config         
| | | | controllers    
| | | | entities       
| | | | exceptions
| | | | models         
| | | | repositories
| | | | services
| | | | utils
| | test
| | | kotlin\com\moreira\restaurant
```

- The reverse proxy configuration is located at `nginx`.

- The files used to feed the database are located at `database`. There you may find two `.csv` files, one `.py` and the `Dockerfile`. If you want to keep the fed information in a volume as to avoid reinserting them every time, `uncomment the volume code` from the Dockerfile. Also remember to comment the python session as to avoid duplicating data when running `compose up -d`

### 6. Additional Assumptions

- The assessment description said the filter funcionality should return only the best 5 matches. Thus, the back application shall limit the return up to 5 only when using the filter functionality, which means the initial load displayed uses the `/findAll` endpoint, while the filter ises the `/findByParameters`.

- If no filters are input the sarch button uses `/findAll`.

- If the Clear filter button is clicked and than search button is clicked, it uses the `/findAll`.