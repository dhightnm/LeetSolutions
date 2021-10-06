# Write your MySQL query statement below
Select a.sale_date as sale_date, a.sold_num - o.sold_num as diff from ((select * from sales where fruit = 'Apples') a
join
(select * from sales where fruit = 'Oranges') o
on a.sale_date = o.sale_date);