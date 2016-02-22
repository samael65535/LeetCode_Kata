# 181. Employees Earning More Than Their Managers

select Employee.Name from Employee, Employee Manager Where Manager.Id = Employee.ManagerId and Employee.Salary > Manager.Salary;
