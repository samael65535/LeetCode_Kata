SELECT Email FROM Person group by Email HAVING count(*) >= 2;
