<?php

class request{

	public $app;
        public $_app;
	public $param;
        public $anchor;
        public $root;

	public function __construct(){

		$this -> seg();

	}

	public function seg(){


            $this->app = isset($_GET['app'])?$_GET['app']:'';
            $this->_app =  $this->app;
            $this->param = isset($_GET['param'])?$_GET['param']:'';;
            $this->anchor="http://".$_SERVER['HTTP_HOST'].str_replace("index.php","",$_SERVER['SCRIPT_NAME']);
            $this->root=$_SERVER['DOCUMENT_ROOT'].str_replace("index.php","",$_SERVER['SCRIPT_NAME']);
            if($this->_app==""){
                $this->_app="Home";
            }
            $data = json_decode(file_get_contents("php://input"));
            $param = array();
            foreach( $data as $clave => $valor){
              $param[$clave] = $valor;
            }
            $this->param=$param;

        }


}

function get_files($dir){

  $files_=scandir($dir,1);
  $files_len=count($files_)-2;

  if($files_len>0){
    array_pop($files_);
    array_pop($files_);
    $file=array();
    foreach($files_ as $key=>$value){
      $nombre_archivo = utf8_encode($value);
      $file[]=("assets/recursos/".$nombre_archivo);
    }
    sort($file);
    return array("ls"=>$file,"access"=>true);
  }
  else{
    return array("ls"=>null,"access"=>false,'execute'=> "empty");
  }

}


function fun_api($api){

        if (function_exists($api->app)){
               return call_user_func($api->app,$api->param);
        }
}
function slites($param){
  $array=array();
      //$dir = './../assets/recursos';
      $dir = './../assets/recursos/.';
      if (is_dir($dir)) {
        $array = get_files($dir);
      }
      else{
        $array['ls'] = null;
        $array['access'] = false;
      }
      return $array;
}

function contacto($param){
  $para      = $param['correo'];//'contacto@spechi.mx';
  $titulo    = utf8_decode($param['asunto']);
  $mensaje   = utf8_decode($param['mensaje']);
  $cabeceras = 'From: '. $param['correo'];

  return array('access'=>mail($para, $titulo, $mensaje, $cabeceras));
}




$_sys;
$_sys= new request();

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        //If required
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
}

$request_method = $_SERVER["REQUEST_METHOD"];
session_start();
echo json_encode(array("session"=>$_SESSION,"_sys"=>$_sys, "fun" =>fun_api($_sys)));

