# BookMyShow

- one theater
- one room
- multiple slots
- multiple movies
- Seats have serial int id

## Entities:

- Movies
    - id
    - name
    - length

- Shows
    - show_id
    - movie_id (references movies -> id)
    - slot
    - price

- Seats
    - seat_id 
    - show_id (references shows -> id)
    - booked
    - booked_by (references users -> id)

- Users
    - user_id
    - user_name
