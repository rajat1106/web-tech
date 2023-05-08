<html>
    <head>
        <title>Electricity Bill</title>
    </head>
    <?php
        $units_used = $_POST["units"];
        $cost = 0;
        if($units_used <= 50){
            $cost += $units_used * 3.5;
        }elseif($units_used <= 150) {
            $cost += 50*3.5; 
            $cost += ($units_used-50)*4;
        }elseif($units_used <= 250){
            $cost += 50*3.5;
            $cost += 100*4;
            $cost += (units-150)*5.20;
        }elseif($units_used >= 250){
            $cost += 50*3.5;
            $cost += 100*4;
            $cost += 100*5.20;
            $cost += ($units_used-250)*6.5;
        }
        
    ?>
    <body>
        <h1>Electricity Bill</h1>
        <p>units used: <?php echo $units_used ?></p> 
        <p>Electricity Bill: <?php echo $cost?>.Rs</p> 
    </body>
</html>
