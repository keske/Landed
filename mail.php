<?php

  print_r($_POST);

  if (empty($_POST['email']) or empty($_POST['data']) or isset($_GET['debug'])) {
      echo 'Your request ' . PHP_EOL;
      
      print_r($_REQUEST);
      echo 'Use Ajax post request. An example of how it should look' . PHP_EOL;
      $example_data = array(
          'email' => 'georg@inbox.ru',
          'data' => array(
              'FNAME' => 'Georg',
              'PHONE' => '+79262859833',
              'CITY' => 'Moscow',
              'MMERGE4' => 'Yes',
              'WHENMOVE' => 'As soon as posstible',
              'MMERGE8' => 'Yes',
              'MMERGE7' => 'Lease To Own',
              'MMERGE9' => 'Comment',
          )
      );
      print_r($example_data);
      die;
  }

  if (!function_exists('curl_version')) {
      var_dump(extension_loaded('curl'));
      echo 'we need php Curl!' . PHP_EOL . 'http://php.net/manual/ru/curl.installation.php';
  }


  $settings = array(
      'listID' => 'daca24e046',
      'ApiKEY' => '3f087f1041fac47422f807b753dfb88b-us10',
      'possible_merge_fields' => 'FNAME, PHONE, CITY, MMERGE4, WHENMOVE, MMERGE8, MMERGE7, MMERGE9'
  );

  $data = array(
      'email_address' => $_POST['email'],
      'status' => 'subscribed',
      'merge_fields' => filter_data($_POST['data'], $settings['possible_merge_fields'])
  );

  //request mailchimp api: 
  $ch = curl_init();
  list(, $dc_num) = explode('-us', $settings['ApiKEY']);
  curl_setopt($ch, CURLOPT_URL, 'https://us' . $dc_num . '.api.mailchimp.com/3.0/lists/' . $settings['listID'] . '/members/');
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      'Content-Type: application/json'
  ));
  curl_setopt($ch, CURLOPT_USERPWD, 'apikey:' . $settings['ApiKEY']);
  curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/3.0');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 9);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
  $json = curl_exec($ch);

  $response = json_decode($json, true);

  //some debug: 
  echo 'mailchimp responce:<br>' . PHP_EOL;
  echo $json;
  print_r($response);
  print_r($data);

  //final handling: 
  if (empty($response['id'])) {
      die(json_encode(array(
          'result' => 'error',
          'status' => $response['status'],
          'detail' => $response['detail']
      )));
  } else {
      die(json_encode(array(
          'result' => 'success',
          'status' => $response['status']
      )));
  }

  function filter_data($data, $filters)
  {
      $result  = array();
      $filters = array_map('trim', explode(',', $filters));
      foreach ($filters as $filter) {
          $result[$filter] = $data[$filter];
      }
      return $result;
  }

?>